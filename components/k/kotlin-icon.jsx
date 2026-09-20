import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kfztbhshm {
  d: path("M256 256H0V0h256L128 127.949z");
}

.qea20536a {
  stop-color: var(--svg-color--e44857, #e44857);
}

.u1ts3dbke {
  stop-color: var(--svg-color--c711e1, #c711e1);
}

.z2w67ghwc {
  stop-color: var(--svg-color--7f52ff, #7f52ff);
}
</style><defs><linearGradient id="SVGxUOMRb3d" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%"><stop offset=".344%" class="qea20536a"/><stop offset="46.89%" class="u1ts3dbke"/><stop offset="100%" class="z2w67ghwc"/></linearGradient></defs><path fill="url(#SVGxUOMRb3d)" class="kfztbhshm"/>`,
		"fallback": "logos:kotlin-icon",
	});
}

export default Component;
