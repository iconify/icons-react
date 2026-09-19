import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogjzoabvq.css';
import '../../css/p/pwaiynbmo.css';
import '../../css/c/cis-y5biu.css';
import '../../css/k/kt64ghrqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ogjzoabvq"/><rect class="pwaiynbmo"/><rect class="cis-y5biu"/><rect class="kt64ghrqf"/>`,
		"fallback": "boxicons:rows-4-filled",
	});
}

export default Component;
