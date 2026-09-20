import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oslj2ii4m.css';
import '../../css/a/a73d_ib1u.css';
import '../../css/e/eqjpfk44b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oslj2ii4m"/><path class="a73d_ib1u"/><path class="eqjpfk44b"/></g>`,
		"fallback": "streamline-logos:mac-finder-logo",
	});
}

export default Component;
