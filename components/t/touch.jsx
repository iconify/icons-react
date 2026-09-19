import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh00ezddk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh00ezddk"/>`,
		"fallback": "fluent-mdl2:touch",
	});
}

export default Component;
