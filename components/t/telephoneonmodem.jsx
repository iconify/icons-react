import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak15axbuu.css';
import '../../css/t/ts-aieb2i.css';
import '../../css/i/i2_8gubfl.css';
import '../../css/b/b5czi7wft.css';
import '../../css/f/fjfqacvre.css';
import '../../css/h/hg36tbc2a.css';
import '../../css/f/f8bdrkb6y.css';
import '../../css/z/zstptq8zb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak15axbuu"/><path class="ts-aieb2i"/><path class="i2_8gubfl"/><path class="b5czi7wft"/><circle class="fjfqacvre"/><circle class="hg36tbc2a"/><circle class="f8bdrkb6y"/><path class="zstptq8zb"/>`,
		"fallback": "fxemoji:telephoneonmodem",
	});
}

export default Component;
