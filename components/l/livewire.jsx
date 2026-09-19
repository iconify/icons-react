import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcrd7-toh.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqpcl6bnj.css';
import '../../css/c/c07nn9b0c.css';
import '../../css/d/dmqd37b_t.css';
import '../../css/m/m2cahk2ih.css';
import '../../css/l/l-d7h-bcb.css';
import '../../css/n/nycd_gb7b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG5WCixdVh" class="tcrd7-toh"/></defs><use href="#SVG5WCixdVh" class="d2kvgvbvc"/><path class="jqpcl6bnj"/><path class="c07nn9b0c"/><use href="#SVG5WCixdVh" class="d2kvgvbvc"/><path class="dmqd37b_t"/><path class="m2cahk2ih"/><path class="l-d7h-bcb"/><path class="nycd_gb7b"/>`,
		"fallback": "devicon:livewire",
	});
}

export default Component;
