import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tx3vjybot.css';
import '../../css/g/g1z4nccwj.css';
import '../../css/w/w45mv2eii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tx3vjybot"/><path class="g1z4nccwj"/><path class="w45mv2eii"/></g>`,
		"fallback": "streamline-logos:microsoft-onedrive-logo-1",
	});
}

export default Component;
