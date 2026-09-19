import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2llityiz.css';
import '../../css/g/g7hfw0b6x.css';
import '../../css/h/hqofnceah.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 s2llityiz"/><path class="clr-i-solid clr-i-solid-path-2 g7hfw0b6x"/><path class="clr-i-solid clr-i-solid-path-3 hqofnceah"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:target-solid",
	});
}

export default Component;
