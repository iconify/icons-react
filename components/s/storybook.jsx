import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a66j17bbi.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/heeii1f4x.css';
import '../../css/n/nflhq8v3y.css';

const viewBox = {"width":256,"height":319};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGCjwircEr" class="a66j17bbi"/></defs><mask id="SVGd4Xo1w9i" class="n1mjunbsu"><use href="#SVGCjwircEr"/></mask><use href="#SVGCjwircEr" class="heeii1f4x"/><path mask="url(#SVGd4Xo1w9i)" class="nflhq8v3y"/>`,
		"fallback": "thesvg-color:storybook",
	});
}

export default Component;
