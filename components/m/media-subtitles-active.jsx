import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdztqbcsa.css';
import '../../css/o/ocdek8bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdztqbcsa"/><path clip-rule="evenodd" class="ocdek8bzg"/>`,
		"fallback": "nrk:media-subtitles-active",
	});
}

export default Component;
