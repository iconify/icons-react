import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2833rb_h.css';
import '../../css/m/mwapz_r-l.css';
import '../../css/r/rxcdkqb9f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2833rb_h"/><path class="mwapz_r-l"/><path class="rxcdkqb9f"/>`,
		"fallback": "energy-icons:ladybird-20",
	});
}

export default Component;
