import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gbtkzebhy.css';
import '../../css/p/pwwwelnvp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gbtkzebhy"/><path class="pwwwelnvp"/></g>`,
		"fallback": "glyphs:maple-leaf",
	});
}

export default Component;
