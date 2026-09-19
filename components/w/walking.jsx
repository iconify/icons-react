import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cm-y8obft.css';
import '../../css/s/skckwhb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cm-y8obft"/><path class="skckwhb5i"/></g>`,
		"fallback": "hugeicons:walking",
	});
}

export default Component;
