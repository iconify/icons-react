import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8ke-ebvs.css';
import '../../css/v/vqijov7nf.css';
import '../../css/f/fopjc16sg.css';
import '../../css/w/w712zwbvu.css';
import '../../css/s/sy902qbmh.css';
import '../../css/i/i-gfm7fia.css';
import '../../css/w/w7b3aac8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8ke-ebvs"/><path class="vqijov7nf"/><path class="fopjc16sg"/><path class="w712zwbvu"/><path class="sy902qbmh"/><path class="i-gfm7fia"/><path class="w7b3aac8r"/>`,
		"fallback": "streamline-emojis:pig-nose",
	});
}

export default Component;
