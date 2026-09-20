import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/i/ivyaaxbeo.css';
import '../../css/c/cyvrsf2ph.css';
import '../../css/s/sk4x3qaqt.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="ivyaaxbeo"/><path class="cyvrsf2ph"/><path class="sk4x3qaqt"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:united-arab-emirates",
	});
}

export default Component;
