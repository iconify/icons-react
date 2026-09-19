import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t3ot4iiwb.css';
import '../../css/c/cl9inu1st.css';
import '../../css/s/suved0bxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="t3ot4iiwb"/><path clip-rule="evenodd" class="cl9inu1st"/><path class="suved0bxg"/></g>`,
		"fallback": "icon-park:pic",
	});
}

export default Component;
