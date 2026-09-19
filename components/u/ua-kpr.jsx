import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pqheo4b4w.css';
import '../../css/i/itpwhcerj.css';
import '../../css/w/w-bzu2j1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pqheo4b4w"/><path class="itpwhcerj"/><path class="w-bzu2j1h"/></g>`,
		"fallback": "circle-flags:ua-kpr",
	});
}

export default Component;
