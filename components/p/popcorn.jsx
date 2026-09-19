import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o7zax3afh.css';
import '../../css/w/w64r6y5by.css';
import '../../css/m/m2sghccup.css';
import '../../css/s/shsxjhb7n.css';
import '../../css/e/ez7_7ggxs.css';
import '../../css/g/g_iufpvye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="o7zax3afh"/><path class="w64r6y5by"/><path class="m2sghccup"/><path class="shsxjhb7n"/><path class="ez7_7ggxs"/><path class="g_iufpvye"/></g>`,
		"fallback": "icon-park:popcorn",
	});
}

export default Component;
