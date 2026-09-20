import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr4rpnb-k.css';
import '../../css/a/a698f-07m.css';
import '../../css/y/y_7o9gs7y.css';
import '../../css/i/irx0otbff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr4rpnb-k"/><path class="a698f-07m"/><path class="y_7o9gs7y"/><path class="irx0otbff"/>`,
		"fallback": "material-icon-theme:rubocop",
	});
}

export default Component;
