import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvgqtqb8d.css';
import '../../css/f/f7e4_uyaw.css';
import '../../css/s/sg9uajj-e.css';
import '../../css/m/m52v0xb7c.css';
import '../../css/y/yjz70yk9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvgqtqb8d"/><path class="f7e4_uyaw"/><path class="sg9uajj-e"/><path class="m52v0xb7c"/><path class="yjz70yk9z"/>`,
		"fallback": "selfhst:relaticle-dark",
	});
}

export default Component;
