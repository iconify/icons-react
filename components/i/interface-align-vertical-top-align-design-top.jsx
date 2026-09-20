import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z5ias_4yk.css';
import '../../css/g/gdatfssdj.css';
import '../../css/t/tzfvapu6d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z5ias_4yk"/><rect transform="rotate(90 10.5 6.25)" class="gdatfssdj"/><rect transform="rotate(90 3.5 8.25)" class="tzfvapu6d"/></g>`,
		"fallback": "streamline:interface-align-vertical-top-align-design-top",
	});
}

export default Component;
