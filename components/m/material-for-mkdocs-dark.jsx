import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_sn15ygy.css';
import '../../css/s/sq7yslbqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_sn15ygy"/><path class="sq7yslbqa"/>`,
		"fallback": "selfhst:material-for-mkdocs-dark",
	});
}

export default Component;
