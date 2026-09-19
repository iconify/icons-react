import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/penxt_bky.css';
import '../../css/r/rdotspt7s.css';
import '../../css/r/rbk3mibcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="penxt_bky"/><circle class="rdotspt7s"/><path class="rbk3mibcf"/>`,
		"fallback": "carbon:radio-push-to-talk",
	});
}

export default Component;
