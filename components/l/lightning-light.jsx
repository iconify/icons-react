import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pkgjvccjw.css';
import '../../css/l/l7wzwbbie.css';
import '../../css/m/myrna_blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG60XUXchT" width="12" height="20" x="6" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="pkgjvccjw"/><path class="l7wzwbbie"/></mask><path mask="url(#SVG60XUXchT)" class="myrna_blh"/>`,
		"fallback": "lets-icons:lightning-light",
	});
}

export default Component;
