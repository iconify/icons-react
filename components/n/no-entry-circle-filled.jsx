import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/m/m_pivy1tn.css';
import '../../css/k/k7pmcabam.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGKtsnAd6n"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="m_pivy1tn"/><path class="k7pmcabam"/></g></mask></defs><circle mask="url(#SVGKtsnAd6n)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:no-entry-circle-filled",
	});
}

export default Component;
