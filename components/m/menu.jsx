import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj8qeqbpz.css';
import '../../css/i/itzm3abxz.css';
import '../../css/y/ycxg46bhx.css';
import '../../css/l/lcqxtqbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer vj8qeqbpz"/><path class="duoicon-secondary-layer itzm3abxz"/><path class="duoicon-primary-layer ycxg46bhx"/><path class="duoicon-secondary-layer lcqxtqbuo"/>`,
		"fallback": "duo-icons:menu",
	});
}

export default Component;
