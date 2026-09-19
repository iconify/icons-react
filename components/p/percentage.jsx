import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gi_p70b2p.css';
import '../../css/b/bk5i81qzz.css';
import '../../css/c/ceitnjb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gi_p70b2p"/><circle class="bk5i81qzz"/><circle class="ceitnjb9j"/></g>`,
		"fallback": "akar-icons:percentage",
	});
}

export default Component;
