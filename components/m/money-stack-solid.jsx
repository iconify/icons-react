import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gblqb-qvt.css';
import '../../css/x/xaa7x4xbn.css';
import '../../css/x/x9866xb-a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gblqb-qvt"/><path clip-rule="evenodd" class="xaa7x4xbn"/><path class="x9866xb-a"/>`,
		"fallback": "teenyicons:money-stack-solid",
	});
}

export default Component;
