import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdolnqbey.css';
import '../../css/q/qiz-9kb7a.css';
import '../../css/k/kkhe1jboc.css';
import '../../css/x/x4_9e9-hn.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdolnqbey"/><path class="qiz-9kb7a"/><path class="kkhe1jboc"/><path class="x4_9e9-hn"/>`,
		"fallback": "material-icon-theme:vanilla-extract",
	});
}

export default Component;
