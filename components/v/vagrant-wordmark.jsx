import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsu-6cu0h.css';
import '../../css/a/ao3chnvww.css';
import '../../css/h/hgxfgonkw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsu-6cu0h"/><path class="ao3chnvww"/><path class="hgxfgonkw"/>`,
		"fallback": "devicon:vagrant-wordmark",
	});
}

export default Component;
