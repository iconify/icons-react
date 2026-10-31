import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p99hl5bjs.css';
import '../../css/b/bupogob7n.css';
import '../../css/s/s84xs2b2r.css';
import '../../css/c/cetdxtbjt.css';
import '../../css/i/if17zbneb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p99hl5bjs"/><path class="bupogob7n"/><path class="s84xs2b2r"/><path class="cetdxtbjt"/><path class="if17zbneb"/>`,
		"fallback": "tabler-flags:new-caledonia",
	});
}

export default Component;
