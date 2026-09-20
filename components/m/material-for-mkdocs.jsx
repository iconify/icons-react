import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voypd9b9h.css';
import '../../css/a/awbal7krk.css';
import '../../css/f/fj-jyhb0m.css';
import '../../css/f/faqsbacrx.css';
import '../../css/m/mc9tj5b-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="voypd9b9h"/><path class="awbal7krk"/><path class="fj-jyhb0m"/><path class="faqsbacrx"/><path class="mc9tj5b-s"/>`,
		"fallback": "selfhst:material-for-mkdocs",
	});
}

export default Component;
