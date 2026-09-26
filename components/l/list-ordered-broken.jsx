import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ofbo3go0r.css';
import '../../css/z/z96w33bzg.css';
import '../../css/s/s8om3o5nq.css';
import '../../css/o/owrhvnb3b.css';
import '../../css/q/qe311mboy.css';
import '../../css/b/b7flqff0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ofbo3go0r"/><path class="z96w33bzg"/><path class="s8om3o5nq"/><path class="owrhvnb3b"/><path class="qe311mboy"/><path class="b7flqff0r"/></g>`,
		"fallback": "solar:list-ordered-broken",
	});
}

export default Component;
