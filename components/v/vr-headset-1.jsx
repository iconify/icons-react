import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gbkdk2b7t.css';
import '../../css/t/tqbyw--7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gbkdk2b7t"/><path class="tqbyw--7g"/></g>`,
		"fallback": "streamline:vr-headset-1",
	});
}

export default Component;
