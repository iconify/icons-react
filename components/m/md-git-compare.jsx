import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/givycqbte.css';
import '../../css/q/qi9ru7mur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="givycqbte"/><path class="qi9ru7mur"/>`,
		"fallback": "ion:md-git-compare",
	});
}

export default Component;
