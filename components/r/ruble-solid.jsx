import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_umz9pvm.css';
import '../../css/f/f5-agqbsi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 e_umz9pvm"/><path class="clr-i-solid clr-i-solid-path-2 f5-agqbsi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:ruble-solid",
	});
}

export default Component;
