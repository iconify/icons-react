import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzz9jcdew.css';
import '../../css/e/eler63bmi.css';
import '../../css/e/euyepzwwh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 mzz9jcdew"/><path class="clr-i-solid clr-i-solid-path-2 eler63bmi"/><path class="clr-i-solid clr-i-solid-path-3 euyepzwwh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:volume-up-solid",
	});
}

export default Component;
