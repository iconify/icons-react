import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n14dm42yr.css';
import '../../css/m/m4ijjlwle.css';
import '../../css/l/l3k470bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n14dm42yr"/><path class="m4ijjlwle"/><path class="l3k470bnu"/></g>`,
		"fallback": "streamline-logos:laravel-logo-1",
	});
}

export default Component;
