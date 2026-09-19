import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfm1etoml.css';
import '../../css/t/tg8jb6oai.css';
import '../../css/f/fdrpmfhbn.css';
import '../../css/o/og4dv3brq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfm1etoml"/><path class="tg8jb6oai"/><circle class="fdrpmfhbn"/><path class="og4dv3brq"/>`,
		"fallback": "carbon:medication-alert",
	});
}

export default Component;
