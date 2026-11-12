import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0bvlpdn.css';
import '../../css/t/tdr-0yasd.css';
import '../../css/s/s-edpzbsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0bvlpdn"/><path class="tdr-0yasd"/><path class="s-edpzbsh"/>`,
		"fallback": "selfhst:synology",
	});
}

export default Component;
