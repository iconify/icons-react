import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/lt_eqm3hp.css';
import '../../css/l/l7wzwbbie.css';
import '../../css/g/gu7z2-7lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGt6nuteKz" width="14" height="22" x="5" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="lt_eqm3hp"/><path class="l7wzwbbie"/></mask><path mask="url(#SVGt6nuteKz)" class="gu7z2-7lt"/>`,
		"fallback": "lets-icons:lightning",
	});
}

export default Component;
