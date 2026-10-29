import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvuvceb0e.css';
import '../../css/f/ff9iz31pd.css';
import '../../css/x/x08cpt1pz.css';
import '../../css/b/bfl1gac6p.css';
import '../../css/i/i2kz-cc1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvuvceb0e"/><path class="ff9iz31pd"/><path class="x08cpt1pz"/><path class="bfl1gac6p"/><path class="i2kz-cc1i"/>`,
		"fallback": "withicons-bauhaus:toilet",
	});
}

export default Component;
