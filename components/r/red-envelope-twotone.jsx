import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb39ecbvy.css';
import '../../css/f/f3eag6bdv.css';
import '../../css/j/jdf9bpbui.css';
import '../../css/x/xi8ki5c4k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb39ecbvy"/><path class="f3eag6bdv"/><path class="jdf9bpbui"/><path class="xi8ki5c4k"/>`,
		"fallback": "ant-design:red-envelope-twotone",
	});
}

export default Component;
