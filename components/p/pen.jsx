import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnwt2bcqt.css';
import '../../css/p/prkek0ihm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/c/cdf-aebkz.css';
import '../../css/d/drrvpubmt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnwt2bcqt"/><path class="prkek0ihm"/><g class="rpvb-o6bq"><path class="cdf-aebkz"/><path class="drrvpubmt"/></g>`,
		"fallback": "openmoji:pen",
	});
}

export default Component;
