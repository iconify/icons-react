import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-0e6gban.css';
import '../../css/c/czb_lcctb.css';
import '../../css/m/m965-ugvd.css';
import '../../css/l/lzgh9tr9w.css';
import '../../css/l/layoymx-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-0e6gban"/><path class="czb_lcctb"/><path class="m965-ugvd"/><path class="lzgh9tr9w"/><path class="layoymx-c"/>`,
		"fallback": "streamline-emojis:sparkles",
	});
}

export default Component;
