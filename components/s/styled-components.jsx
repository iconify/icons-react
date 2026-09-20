import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvuze5aol.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5lk2vbtt.css';
import '../../css/f/fcjy_6bdp.css';

const viewBox = {"width":318,"height":318};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGuxFuEeJV" class="pvuze5aol"/><mask id="SVGPsU7edNC" width="318" height="318" x="0" y="0" class="n1mjunbsu"><use href="#SVGuxFuEeJV"/></mask></defs><g class="bi12bsetm"><use href="#SVGuxFuEeJV" mask="url(#SVGPsU7edNC)" class="g5lk2vbtt"/><path class="fcjy_6bdp"/></g>`,
		"fallback": "thesvg-color:styled-components",
	});
}

export default Component;
