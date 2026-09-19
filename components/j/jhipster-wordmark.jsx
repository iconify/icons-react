import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tum2ujb2a.css';
import '../../css/t/tets5tbsv.css';
import '../../css/d/dmkkcgbra.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tum2ujb2a"/><path class="tets5tbsv"/><path class="dmkkcgbra"/>`,
		"fallback": "devicon:jhipster-wordmark",
	});
}

export default Component;
