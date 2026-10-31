import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrscgzb-f.css';
import '../../css/s/st6uysbjd.css';
import '../../css/a/a-wwm5bze.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrscgzb-f"/><path class="st6uysbjd"/><path class="a-wwm5bze"/>`,
		"fallback": "tabler-flags:north-korea",
	});
}

export default Component;
