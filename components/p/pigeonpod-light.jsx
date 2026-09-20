import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elg8rhbmi.css';
import '../../css/r/rk-ri1bqz.css';
import '../../css/b/bivwwb2cw.css';
import '../../css/c/cpztshyvx.css';
import '../../css/r/rxv6fxb8e.css';
import '../../css/s/s8zl27fca.css';
import '../../css/b/bn3v3rkcv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elg8rhbmi"/><path class="rk-ri1bqz"/><path class="bivwwb2cw"/><path class="cpztshyvx"/><path class="rxv6fxb8e"/><path class="s8zl27fca"/><path class="bn3v3rkcv"/>`,
		"fallback": "selfhst:pigeonpod-light",
	});
}

export default Component;
