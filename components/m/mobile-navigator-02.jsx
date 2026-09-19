import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cld7pcy1f.css';
import '../../css/m/mnwdukbea.css';
import '../../css/l/l0761sbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cld7pcy1f"/><path class="mnwdukbea"/><path class="l0761sbgh"/></g>`,
		"fallback": "hugeicons:mobile-navigator-02",
	});
}

export default Component;
