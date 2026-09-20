import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u3jb_255c.css';
import '../../css/m/mjtdkqbgz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u3jb_255c"/><path class="mjtdkqbgz"/></g>`,
		"fallback": "streamline:smiley-very-shocked",
	});
}

export default Component;
