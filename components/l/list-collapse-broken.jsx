import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ofbo3go0r.css';
import '../../css/z/z96w33bzg.css';
import '../../css/s/s8om3o5nq.css';
import '../../css/o/owrhvnb3b.css';
import '../../css/t/tv7mnccnu.css';
import '../../css/m/meafjacfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ofbo3go0r"/><path class="z96w33bzg"/><path class="s8om3o5nq"/><path class="owrhvnb3b"/><path class="tv7mnccnu"/><path class="meafjacfv"/></g>`,
		"fallback": "solar:list-collapse-broken",
	});
}

export default Component;
