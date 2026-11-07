import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb66-999x.css';
import '../../css/a/a5o08hanx.css';
import '../../css/u/u9oflkbpf.css';
import '../../css/m/mk_mhcczr.css';
import '../../css/v/vhfkjmeoa.css';
import '../../css/i/ili303k2t.css';
import '../../css/x/x6nytcb_c.css';
import '../../css/j/j207o1bfp.css';
import '../../css/m/m55ifrb-z.css';
import '../../css/s/sim0n0bur.css';
import '../../css/k/k620o1baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb66-999x"/><path clip-rule="evenodd" class="a5o08hanx"/><path class="u9oflkbpf"/><path clip-rule="evenodd" class="mk_mhcczr"/><path class="vhfkjmeoa"/><path clip-rule="evenodd" class="ili303k2t"/><path class="x6nytcb_c"/><path class="j207o1bfp"/><path class="m55ifrb-z"/><path class="sim0n0bur"/><path class="k620o1baq"/>`,
		"fallback": "solar:qr-code-outline",
	});
}

export default Component;
